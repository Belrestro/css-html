# CSS Selectors cheatsheet

Navigation

1. [Homepage](../readme.md)
2. [HTML structure](html_structure.md)
3. [HTML tags](html_tags.md)
4. [HTML attributes](html_attributes.md)
5. CSS structure
6. [CSS selectors](css_selectors.md)
7. [CSS properties](css_properties.md)

### What is CSS

`CSS` це інструкції по оформленню `HTML` елементів.  Завдяки ним можна суттєво покращити користувацький досвід (`User Experience`), і втілювати найсміливіші дизайнерські рішення.

## How to CSS

Щоб `CSS` заграв, потрібно його __якимось__ чином __додати__ на `HTML` сторінку.
Для цього існує декілька способів, всі вони ховаються в назві.
`CSS - Cascade Style Sheet`.

`Inline styles` - стилі беспосередньо у атрибуті `style="color:blue;"` `HTML` тегу.
`Embedded styles` - стилі які знаходятся у `HTML` сторінці беспосередньо у тегу `<style>`.
`CSS files` - стилі які знаходятся у окремому файлі `.css`.

## CSS rule

Правила у `CSS` існують щоб міняти зовнішній вигляд дуже виважено і прицільно, щоб максимально влучно стилізувати.
Правила які застосовуються до `HTML` тегів складаються в цілому з двох речей:

`selector(s)` - селектор, це запит на конкретних кандидатів для цього стилю

`properties` - властивості, це ті конкретні параметри які ви хочете настроїти
кожна властивість записується наступним чином:


`{property-name} : {property-value} ; `

```css
p { /* один селектор */
	color: black; /* властивості */
    font-size: 16px; /* властивості */
}

p, span { /* декілька селекторів (одні і ті ж властивості для різних селекторів) */
	margin-left: 10px; /* властивості */
}
```

Перелік і особливості властивостей і селекторів описані в окремих розлілах.
Кожна властивість __обов'язково__ має бути розділена крапка комою.


## CSS comments

У `CSS` є лише один вид комментарів - `multilene`: `/* */`
все що після `/*` буде ігноруватися інтерпритатором, все після `*/` буде виконуватися, все між цими двома призначене для розробників і є комментарем.


## Inline styles

Щоб додати такий стиль треба просто задати аттрибут `style=""` тегу. Селектор (і фігурні дужки) використовувати не потрібно, бо кандидат вже знайдений, перелічуються тільки властивості через карпка кому.

```html
<p style="color: black; font-size: 16px;">Herro world</p>
```

## Embedded styles

Такі стилі розмішають у тегу `<style>` частіше за все всередині `<head>`, все що всередині такого тегу - це `css` правила

```html
<head> 
	<style>
	  p {
		color: black;
        font-size: 16px;
	  }
	<style>
</head>
```

## CSS files

Спочатку потрібно створити окремий файл з розширенням `.css` e.g: `style.css`.
У цей файл записуються `CSS` правила.

Для того щоб під'єднати такий стиль до сторінки треба використовувати тег `<link>`, він в свою чергу розміщаєтся у тегу `<head>`.
```html
 <link rel="stylesheet" href="styles.css"> <!-- відносний шлях -->
 <link rel="stylesheet" href="/styles.css"> <!-- абсолютний шлях -->
 <link rel="stylesheet" href="https://some.site/styles.css"> <!-- зовнішній ресурс шлях -->
```


## CSS size box

![css box size](http://www.cssterm.com/uploads/images/box_model.gif)