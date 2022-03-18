#! /usr/bin/env node

const path = require('path');
const program = require('commander');
const replace = require('replace-in-file');
import fs from 'fs-extra';


import { consoleBlue, consoleGreen, consoleRed, pageIsExist, getTitle, humpToUpperAndUnderscore, getOperationPath } from './utils';
import CONST from './const';

program
  .command('init <name>')
  .description('初始化新页面')
  .action(async (name: string) => {
    consoleBlue(`检测页面【${name}】是否已存在...`);

    // 1、检测当前页面是否已经存在
    if (pageIsExist(getOperationPath(`${CONST.PAGE_PREFIX_DIR}${name}`))) {
      return consoleRed(`页面【${name}】已存在！重新命名`);
    }
    consoleGreen(`检测通过`);

    // 2、获取页面title
    const title = await getTitle();
    console.log(title);

    // 3、修改config/getPages.js
    const getPagesNewContent = `
    // ${title}
    ${name}: {
        entry: 'src/pages/${name}/index.js',
        template: templateFile,
        filename: '${name}.html',
        title: '${title}',
        minify: false,
    },`;

    // 读
    let getPagesContent = fs.readFileSync(getOperationPath(CONST.CONFIG_GETPAGE_JS), {
      encoding: 'utf-8',
    });

    // 改
    getPagesContent = getPagesContent.replace(/const pages = \{([\s\S]*)\n\}\;/, (match, $1) => {
      return match.replace($1, `${$1}${getPagesNewContent}`);
    });

    // 写
    fs.writeFileSync(getOperationPath(CONST.CONFIG_GETPAGE_JS), getPagesContent);

    // 4、修改config/getPages.js
    const pageNewContent = `export const PAGE_${humpToUpperAndUnderscore(name)} = \`\${pageRoot}/${name}\`; // ${title}`;

    // 读
    let pageContent = fs.readFileSync(getOperationPath(CONST.CONFIG_PAGE_JS), {
      encoding: 'utf-8',
    });

    // 改
    pageContent = `${pageContent}${pageNewContent}\n`;

    // 写
    fs.writeFileSync(getOperationPath(CONST.CONFIG_PAGE_JS), pageContent);

    // 5、新增页面 src/pages
    const pageDir = getOperationPath(`${CONST.PAGE_PREFIX_DIR}${name}`);

    fs.copySync(path.resolve(__dirname, '..', CONST.PAGE_DIR_TEMPLATE), pageDir);

    // 6、新增模板文件 template/afe

    const templateFilePath = getOperationPath(`${CONST.TEMPLATE_PREFIX_DIR}${name}.html`)
    fs.copySync(path.resolve(__dirname, '..', CONST.HTML_TEMPLATE_PATH), templateFilePath);

    // 7、字符串替换
    replace.sync({
      files: [
        path.resolve(pageDir, '*'),
        templateFilePath
      ],
      from: /\$\{pageName\}/g,
      to: name,
    });
    consoleGreen(`${name}-${title} 初始化完成`);
  });
program.parse();


