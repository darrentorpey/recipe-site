import SbEditable from 'storyblok-react';

import Recipe from './Recipe';

const FeaturedRecipes = ({ blok }) => {
  return (
    <ul className="flex flex-col flex-direction md:grid grid-cols-3 px-4 gap-4">
      {blok.recipes.map((recipe) => (
        recipe.content ?
          (
            <li
              data-uid={recipe.content._uid}
              key={recipe.content._uid}
              className="max-w-sm"
            >
              <Recipe recipe={recipe.content} />
            </li>
          ) : null
      ))}
    </ul>
  );
};

export default FeaturedRecipes;
