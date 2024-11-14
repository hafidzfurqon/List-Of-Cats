"use client"
 export const getCats = async () => {
            const response = await fetch('https://free-cat-api.vercel.app/cats');
            const result = await response.json()
            console.log(result)
            return result
}