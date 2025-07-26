interface HandleImageProps {
    imageDir: string;
    imgDescription: string;
}

const HandleImage: React.FC<HandleImageProps> = ({imageDir, imgDescription}) => {
    return (
        <img src={imageDir} alt={imgDescription}/>
    );
}

export default HandleImage;