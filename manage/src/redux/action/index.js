
export const type = {
    SWITCH_MENU: 'SWITCH_MENU' // 如果key和value值一样的话就可以简写
}

// 菜单点击切换，修改面包屑名称
// ActionCreator Action创建函数
export function switchMenu(menuName) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}