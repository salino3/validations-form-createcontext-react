interface Routes {
  root: string;
  form: string;
  info: string;
 };

export const AppRoutes: Routes = {
  root: "/",
  form: "/form",
  info: "/info/:id",
 };

export const { root, form, info } = AppRoutes;