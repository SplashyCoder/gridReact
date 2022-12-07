
let Text = () =>{
    const text = 'FAVOURITES STAR WARS CHARACTERS'
    const array = text.split()

    for(let i = 0; i < array; i++) {
        return(
            <div>
                array[i]
            </div>
        )
    }
} 

export default Text;