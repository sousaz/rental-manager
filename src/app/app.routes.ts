import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "rent" },
  { path: "rent", loadChildren: () => import("./rent/rent.routes").then(m => m.RENT_ROUTES) },
];
