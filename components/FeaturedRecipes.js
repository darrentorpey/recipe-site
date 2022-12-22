import SbEditable from 'storyblok-react';

import Recipe from './Recipe';

const FeaturedRecipes = ({ blok }) => {
  return (
    <ul className="flex flex-col flex-direction items-center px-4 gap-4 md:grid md:grid-cols-3">
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
