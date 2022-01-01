/**
 * # Stylelint 配置
 * 由于 Stylelint 14 对 Vue3 的支持存在问题，所以项目使用 `13.13.1` 版本，
 * 新版本的 VSCode 的 Stylelint 插件会提示 stylelint 版本不支持，需要将 VSCode 的 Stylelint 插件版本降级到 `0.87.6`
 */

module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    // 禁止无效的十六进制颜色
    'color-no-invalid-hex': true,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    // 缩进 2 个空格
    'indentation': 2,
    // 最大空行数量 1
    'max-empty-lines': 1,
    // 禁止尾随空格
    'no-eol-whitespace': true,
    // 'max-nesting-depth': 99999,
    // 在每个选择器之间添加空行
    'rule-empty-line-before': [
      'always',
      {
        'ignore': ['after-comment'],
        'except': ['first-nested'],
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // Windi CSS 给 css 扩展的指令：https://cn.windicss.org/features/directives.html
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          // Vue3 支持的选择器：https://v3.cn.vuejs.org/api/sfc-style.html#style-scoped
          'deep',
          'global',
          'slotted',
        ],
      },
    ],
  },
}
