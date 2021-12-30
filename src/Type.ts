type Config = {
  /** 应用列表 */
  apps: {
    /** 名称 */
    name: string,
    /** 图标地址 */
    iconUrl?: string,
    /** 图标大小 */
    iconSize?: string,
    /** 主题色「默认 #ffffff」 */
    themeColor?: string,
    /** 介绍 */
    desp?: string,
    /** 域名 */
    host: string,
  }[]
}
