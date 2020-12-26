import SbEditable from 'storyblok-react';

import Recipe from './Recipe';

const FeaturedRecipes = ({ blok }) => {
  return (
    <ul className="grid grid-cols-3">
      {blok.recipes.map((recipe) => (
        <li
          data-uid={recipe.content._uid}
          key={recipe.content._uid}
          className=""
        >
          <Recipe recipe={recipe.content} />
        </li>
      ))}
    </ul>
  );
};

export default FeaturedRecipes;
