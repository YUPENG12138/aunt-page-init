const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const inquirer = require('inquirer')
const appRoot = require('app-root-path');

// 获取项目根目录
let rootPath = appRoot.path;
// if (process.env.NODE_ENV !== 'production') {
//   rootPath = path.resolve(rootPath, 'test');
// }

// 绿色输出
export const consoleGreen = function (string: string): void {
    console.log(chalk.green(string));
}

// 蓝色输出
export const consoleBlue = function (string: string): void {
    console.log(chalk.hex('#1aa8c0').bold(string));
}

// 红色输出
export const consoleRed = function (string: string): void {
    console.log(chalk.red(string));
}

// 首字母转大写
export const initialsToUppercase = function (string: string): string {
    return string.trim().replace(/^[a-z]{1}/, function (match) {
        return match.toUpperCase();
    });
}

// 驼峰转大写下划线
export const humpToUpperAndUnderscore = function (string: string): string {
    return string.replace(/([A-Z])/g, '_$1').toUpperCase()
}

// 判断当前页面是否已存在
export const pageIsExist = function (url: string): boolean {
    if (fs.existsSync(url)) {
        return true;
    }
    return false;
}

// 获取文件路径
export const getOperationPath = function (relativePath: string): string {
    return path.resolve(rootPath, relativePath);
}

// 获取输入titile
export const getTitle = async function (): Promise<string> {
    let res = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: '输入页面title, 例如: 首页',
        }
    ]);
    if (!res.title.trim()) {
        res = await getTitle();
    }
    return res.title.trim();
}