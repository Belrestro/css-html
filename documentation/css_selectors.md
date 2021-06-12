# CSS Selectors cheatsheet

Navigation

1. [Homepage](../readme.md)
2. [CSS properties](css_properties.md)
3. CSS selectors
4. [HTML structure](html_structure.md)
5. [HTML attributes](html_attributes.md)
6. [HTML tags](html_tags.md)

### What is selectors

Селектори це інструмент в `CSS` з допомогою якого можна застосовувати стилі до окремих `HTML` елементів. Для наступного прикладу:
`.black-box` та `#yellow-circle` виступають ідентифікаторами, саме вони вказують

```css
.black-box {
	display: block;
    background: black;
}

#yellow-circle {
	display: block;
	width: 100px;
    height: 100px;
    background: yellow;
    border-radius: 50%;
}
```


| Selector | Name | Description | Example | Additional |
| -- | -- | -- | -- | -- |
| `*` | універсальний селектор | вибирає всі можливі елементи, окрім псевдо елементів | `* { ... }` | - |
| `.` | селектор классу | вибирає всі елементи з аттрибутом `class="some-name"`| `.some-name { ... }` | - |
| `#` | селектор ідентифікатора | вибирає __один__ елемент з селекотор `id="some-id"`| `#some-id { ... }` | технічно може вибирати всі елементи з таким спелектором, але ідентифікатор має бути унікальним |
| `div`, `p`, `a`, `span`, `h1` `body` ... | селектор тегу | вибирає всі елементи для яких підходить цей тег `<div>` `<p>` `<a>` | `div { ... }` | -  |
| `:before` | псевдо селектор 'до' | вибирає додатковий елемент всередині елементу, який розміщений перед контентом цього елементу | `div:before { ... }` | щоб додати контент у цей елемент потрібно використовувати css властивість `content: 'some content';` |
| `:after` | псевдо селектор 'після' | вибирає додатковий елемент всередині елементу, який розміщений після контенту цього елементу | `div:after { ... }` | щоб додати контент у цей елемент потрібно використовувати css властивість `content: 'some content';` |

### Selectors stacking

кома
підряд
вкладений >
послідовний +

### Selectors weight