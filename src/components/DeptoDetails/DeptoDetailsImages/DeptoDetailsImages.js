import classes from "./DeptoDetailsImages.module.css"

const initPath='/Images/Deptos'

export const getImages =(images)=>{
    const result= images.map((img,index)=>{
        if(index<10&&index!==images.length-1){
            return {
               src: initPath+img.path,
               thumbnail:
                   initPath+img.path,
               thumbnailWidth: 320,
               thumbnailHeight: index%3===0?174:212 ,
               caption: img.description,
               customOverlay:<p className={classes.HoverInfo} >{img.description}</p>
             }
        }
        if(index===images.length-1){
            return {
                src: initPath+img.path,
                thumbnail:
                    initPath+img.path,
                thumbnailWidth: 350,
                thumbnailHeight: 212 ,
                caption: img.description,
                customOverlay:<p className={classes.HoverInfo} >{img.description}</p>
              }
        }
        if(index>=10){
            return {
                src: initPath+img.path
              }
        }
    })
    return result
}