// {text: String, url: String, items: MenuItem[]}[]

const createMenu = (menuItems) => {
  const container = document.createElement('ul');

  for (const item of menuItems) {
    const element = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = item.text;
    a.setAttribute('href', item.url)


    element.appendChild(a);
    container.appendChild(element);
  }
  return container;
}