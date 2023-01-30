export type ICategory = {
  id: string,
  title: string,
  color: string
}

class Category implements ICategory {

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
  id: string;
  title: string;
  color: string;
}

export default Category;
