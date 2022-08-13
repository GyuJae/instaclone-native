import React, {useMemo} from 'react';
import {Image, useWindowDimensions} from 'react-native';
import Swiper from 'react-native-swiper';

interface IProps {
  files: {
    id: number;
    posterPath: string;
  }[];
}

export const Files: React.FC<IProps> = ({files}) => {
  const {width, height} = useWindowDimensions();

  const fileList = useMemo(() => {
    return files.map(file => (
      <Image
        key={`file-${file.id}`}
        source={{uri: file.posterPath}}
        style={{
          width,
          height: height - 400,
        }}
        resizeMode="cover"
      />
    ));
  }, [files, height, width]);
  return (
    <Swiper showsButtons autoplay loop width={width} height={height - 400}>
      {fileList}
    </Swiper>
  );
};
