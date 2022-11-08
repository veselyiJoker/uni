import fileUpload from 'fs'

export const homeSliderDir = {
    jpg: 'C:/React/uni/server/static/images/HomeSlider/jpg/',
    webp: 'C:/React/uni/server/static/images/HomeSlider/webp/'
}

export const partnersSliderDir = {
    jpg: 'C:/React/uni/server/static/images/partnersSlider/jpg/',
    webp: 'C:/React/uni/server/static/images/partnersSlider/webp/'
}

export const getFiles = ( dir, fileType, files ) => {
    const filesInDir = fileUpload.readdirSync(dir)
    const receivedFiles = files || []

    filesInDir.forEach( elem => {
            const name = dir + elem

            if ( fileUpload.statSync(name).isDirectory() ){
                getFiles(name, fileType, receivedFiles)

            } else {
                if ( fileType ) {
                    if ( name.endsWith(`.${ fileType }`) ) {
                        receivedFiles.push(name)
                    }
                } else {
                    receivedFiles.push(name)
                }
            }
        }
    )

    return receivedFiles;
};