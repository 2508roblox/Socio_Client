import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { Post } from './Post';

export const Posts = () => {
    const post = [
        {
            media: 'https://c4.wallpaperflare.com/wallpaper/615/900/842/city-digital-light-design-wallpaper-preview.jpg',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero doloremque, quia animi debitis est enim hic error labore excepturi eligendLorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium odio id vitae, saepe vel voluptatem sapiente omnis eos dolore?'
        },
        {
            media: 'https://images5.alphacoders.com/101/thumb-1920-1015026.jpg',
            content: 'Good Morning!'
        },
        {
            media: 'https://img5.goodfon.com/wallpaper/nbig/d/92/art-zakat-chelovek-liubovanie-krasivyi-vid-doroga-gorod.jpg',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero doloremque, quia animi debitis est enim hic error labore excepturi eligendi!'
        },
        {
            media: 'https://img5.goodfon.com/wallpaper/nbig/b/23/alena-aenami-nightfall-aenami-art-by-aenami-art-risunok-zaka.jpg',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero doloremque, quia animi debitis est enim hic error labore excepturi eligendi!'
        }
    ]
    return (
        <div className=" flex flex-col gap-4  ">
            {post.map((data, index) =>
                <Post postData={data}></Post>
            )}
        </div>

    )
}
