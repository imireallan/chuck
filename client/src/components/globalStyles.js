import { css } from 'styled-components'

const sizes = {
    small: 600,
    medium:600,
    large:992,
    extraLarge:1200
}

/*
 code snipped borroed from medium article
 https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
*/ 

const media = (width) => Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
       @media (${width}: ${sizes[label]}px) {
          ${css(...args)};
       }
    `
    return acc
 }, {})


 export default media