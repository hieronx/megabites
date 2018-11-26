import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeListPage from "./RecipeListPage";
import RecipeViewPage from "./RecipeViewPage";
import CookingPage from "./CookingPage";

const AppRouter = () => (
  <Router>
    <div>
        <Route path="/" exact component={RecipeListPage} />
        <Route path={`/recipes/:id/cooking`} component={CookingPage} />
        <Route path={`/recipes/:id`} exact component={RecipeViewPage} />
    </div>
  </Router>
);

export default AppRouter;