# Stringfy

**WIP** A collection of nice shits for String manipulations.

## Introduction

```javascript
import stringfy from 'stringfy'

// returned string `edcba`
stringfy('abcde').reverse().val()

// returned string `getElementById`
stringfy('get-element-by-id').camelCase().val()

// returned string `hello`
stringfy(' hello   ').trim().val()

// return words count => 3, with CJK support
stringfy('呆死ki').count()
```

## License

MIT.
