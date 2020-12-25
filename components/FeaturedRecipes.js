import SbEditable from 'storyblok-react';

import Recipe from './Recipe';

const FeaturedRecipes = ({ blok }) => {
  return (
    <ul className="flex justify-end">
      {blok.recipes.map((recipe) => (
        <li
          data-uid={recipe.content._uid}
          key={recipe.content._uid}
          className="flex-1"
        >
          <Recipe recipe={recipe.content} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedRecipes;
