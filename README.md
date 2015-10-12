# Stringfy

**WIP.** A collection of nice shits for String manipulations.

## Introduction

```javascript
import stringfy from 'stringfy'

// return string `edcba`
stringfy('abcde').reverse().val()

// return string `getElementById`
stringfy('get-element-by-id').camelCase().val()

// return string `hello`
stringfy(' hello   ').trim().val()

// return words count => 3, with CJK support
stringfy('呆死ki').count()

// return slugify string, with CJK support
// like 'I love cat' => 'i-love-cat'
stringfy('空彩观测').slug().val()
```

## License

MIT.
