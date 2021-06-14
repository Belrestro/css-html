# CSS Properties cheatsheet

Navigation

1. [Homepage](../readme.md)
2. [HTML structure](html_structure.md)
3. [HTML tags](html_tags.md)
4. [HTML attributes](html_attributes.md)
5. [CSS structure](css_structure.md)
6. [CSS selectors](css_selectors.md)
7. CSS properties

## CSS display properties

властивість `display` визначає яким чином буде вести себе елемент по відношенню до сусідніх алементів (у сітці __in `grid`__), та до своїх дитинських елементів

e.g: `display: block`

| Type | Explenation |
| -- | -- |
| none | елемент приберається з сітки повністю  |
| block | елемент займає все можливе місце в ширину |
| inline | елемент займає стільки місця скільки потрібно (йому не можливо задати ширину та висоту), в цілому починає вести себе як текст |
| inline-block | елемент займає стільки місця скільки потрібно (йому можна задавати ширину і висоту), в цілому починає вести себе як текст |
| flex | елемент має характеристики `block` при взаємодії з зовнішніми елементами, але тепер його діти організовані структурно інакше, він постараєтся розмістити всі дочірні елементи в один рядок, __стараючись__ ігновувати їхню ширину |

## CSS size properties

Ці властивості відповідають за розміри блоку в цілому

| Name | Explenation | Values |
| -- | -- |  -- |
| width | визначає ширину елементу | `100px`, `100%` |
| height | визначає висоту елементу |  `100px`, `50%`, `100vh` |
| margin | зовнішній відступ |  `10px`, `10px 10px`, `10px 10px 10px`, `10px 10px 10px 10px` |
| padding | внутрішній відступ |  `10px`, `10px 10px`, `10px 10px 10px`, `10px 10px 10px 10px` |
| border | грань між зовнішнім і внутрішнім відступом, грань елементу |  `1px solid`, `1px solid black` |
| border-style | вид грані | `solid`, `dotted`, `dashed` |
| border-radius |  закруглення грані | `10px`, `50%` |

для властивостей `margin` `border` `padding` існують модифікатори

`*-top` `*-left` `*-right` `*-bottom` e.g. `margin-top`, `padding-bottom`

властивості для `margin` `padding` можна задавати без модифікаторів, але уточнюючи властивості кожної зі сторін таким чином:

`margin: 10px` - всі сторони з зовнішнім відступом `10px`

`margin: 10px 5px` - верхня і нижні сторони з відступом `10px`, а ліва і права `5px`

`margin: 10px 5px 0px` - верхня сторона з відступом `10px`, ліва і права `5px`, нижня `0px`

`margin: 10px 5px 0px 2px` - верхня `10px`, права `5px`, нижня `0px`, ліва `2px`

## CSS fonts

стандартні властивості шрифтів:

| Name | Explenation | Example |
| -- | -- | -- |
| font-size | розмір шрифту | `10px`, `1em`, `100%` |
| line-height | відстань між рядками | `14px` (стандартно font-size + 4px |
| color | колір шрифту | `red`, `#F00`, `#FF0000`, `RGB(255, 0, 0)` |
| letter-spacing | відстань між буквами | `1px` |
| word-spacing | відстань між словами | `10px` |
| text-align | вирівнювання тексту по блоку | `left`, `right`, `center`, `justify` |
| font-family | вид шрифту | `Arial`, `Tahoma`, `Helvetica` |

[Безпечні шрифти у інтернеті](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

[Шукаємо новий шрифт](https://fonts.google.com/)

Щоб додати шрифт на сторінку це можна зробити декількома способами:

скачати шрифт
-

- качаєм шрифт
- зберігаємо в проект
- додаємо з допомогою `@font-face` правила
  ```css
	@font-face {
      font-family: назва-шрифту;
      src: url(шлях-до-шрифту.woff);
    }
  ```
- задаємо властивіть `font-family: назва-шрифту`


використати зовнішній
- 
`link`
```html
<link href="https://ссилка.на/ресурс?family=Baloo+Tammudu+2" rel="stylesheet"> 
```
__Або__

`import`
```html
<style>
	@import url('https://ссилка.на/ресурс?family=Baloo+Tammudu+2');
</style> 
```

__І потім__

задаємо властивіть `font-family: BalooTammudu 2`

[Підключення нового шрифту](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp)