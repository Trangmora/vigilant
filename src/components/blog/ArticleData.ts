import { securityArticles } from './articles/SecurityArticles';
import { preventionArticles } from './articles/PreventionArticles';
import { technologyArticles } from './articles/TechnologyArticles';

export const blogPosts = {
  ...securityArticles,
  ...preventionArticles,
  ...technologyArticles
};