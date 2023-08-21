export interface MealCard {
  title: string;
}

export interface RegisterFormData {
  password: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  token: string;
}
