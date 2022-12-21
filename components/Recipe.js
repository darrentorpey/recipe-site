import {
  NODE_PARAGRAPH,
  NODE_UL,
  render,
} from 'storyblok-rich-text-react-renderer';
import { resizeImage } from '../utils/resizing';

function resizedImage(imageUrl) {
  if (!imageUrl) {
    return null;
  }

  return imageUrl.filename.replace(
    '//a.storyblok.com',
    '//img2.storyblok.com/300x0'
  );
}

function renderGood(document) {
  return render(document, {
    nodeResolvers: {
      [NODE_PARAGRAPH]: (children) => children,
      [NODE_UL]: (children) => (
        <ul className="list-disc list-inside pl-2">{children}</ul>
      ),
    },
  });
}

const Recipe = ({ recipe }) => {
  return (
    <article className="p-6 m-2 rounded-lg shadow-sm max-w-lg bg-white	">
      <h3 className="text-2xl font-serif mb-4">{recipe.title}</h3>

      <img
        src={resizeImage(recipe.hero_image, '300x400')}
        className="mb-2 rounded-xl"
      />

      <div className="py-5">
        <h4 className="text-lg font-semibold">Ingredients:</h4>

        {renderGood(recipe.ingredients)}
      </div>

      <div className="">
        <h4 className="text-lg font-semibold">Directions:</h4>

        {renderGood(recipe.directions)}
      </div>

      <div className="pt-4 mt-4 flex text-gray-700 text-sm relative sm:flex sm:flex-col">
        <div>Recipe by {recipe.author}</div>
      </div>
    </article>
  );
};

export default Recipe;
