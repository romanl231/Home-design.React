interface HandleImageProps {
    imageDir: string;
    imgDescription: string;
}

const HandleImage: React.FC<HandleImageProps> = ({imageDir, imgDescription}) => {
    return (
        <img className="w-full h-full object-cover" src={imageDir} alt={imgDescription}/>
    );
}

export default HandleImage;