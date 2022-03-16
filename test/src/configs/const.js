// 默认pageSize
export const PAGE_SIZE = 10;
// 接单大厅-城市切换本地存储key:
export const CITY_STORAGE_KEY = 'jtfw_aunt_city';

// 门店查询-城市切换本地存储key:
export const STORE_CITY_STORAGE_KEY = 'jtfw_aunt_store_city';
// 默认城市
export const CITY_DEFAULT = {
    cityId: '1',
    cityName: '北京',
};
// 接单大厅筛选项
export const DEMAND_FILTER_OPTIONS = [{
    code: '13329,13330,13331',
    name: '保姆',
    options: [{
        code: '13329,13330,13331',
        name: '全部保姆',
    }, {
        code: '13329',
        name: '住家保姆',
    }, {
        code: '13330',
        name: '白班保姆',
    }, {
        code: '13331',
        name: '钟点工',
    }],
}, {
    code: '13333,13334',
    name: '育儿嫂',
    options: [{
        code: '13333,13334',
        name: '全部育儿嫂',
    }, {
        code: '13333',
        name: '住家育儿嫂',
    }, {
        code: '13334',
        name: '白班育儿嫂',
    }],
}, {
    code: '13332',
    name: '月嫂',
    options: [{
        code: '13332',
        name: '全部月嫂',
    }],
}];
// 接单大厅-工作内容枚举
export const WORK_CONTENT_ENUMS = [{
    code: '170101,170102,170103',
    name: '全部服务',
}, {
    code: '170101',
    name: '做饭做家务',
}, {
    code: '170102',
    name: '照顾小孩',
}, {
    code: '170103',
    name: '照顾老人',
}];

// 预约体检链接
export const MEDICAL_EXAMINATION_URL = 'https://aqs.health.ikang.com/2c/?logicId=ab92afd419eab9881759152601499ab3';
