const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql([
        `
         {
            allContentfulGalleryPost {
                edges {
                    node {
                        slug
                    }
                }
            }
         }
        `
    ]).then((result) => {
        if (result.errors) {
            console.log("Error with contentful data", result.errors)
        }

        const GalleryTemplate = path.resolve('./src/templates/gallery-item.js')

        result.data.allContentfulGalleryPost.edges.forEach(photo => {
            createPage({
                path: `/photos/${photo.node.slug}/`,
                component: slash(GalleryTemplate),
                context: {
                    slug: photo.node.slug
                }
            })
        })
    }).catch(error => console.log("Error with contentful data", error))
}