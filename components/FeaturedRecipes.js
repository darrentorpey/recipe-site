import SbEditable from 'storyblok-react'

const FeaturedRecipes = ({blok}) => {
  return (
    <ul>
        {blok.recipes.map((recipe => (
            <li data-uid={recipe.content._uid} key={recipe.content._uid}>
                Recipe: { recipe.content.title } by { recipe.content.author }
            </li>
        )))}
    </ul>
  )
}

export default FeaturedRecipes
