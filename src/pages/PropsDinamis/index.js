import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20, marginTop: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.text}>Materi Component Dinamis Dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Channel"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.483.1242.1242a/s150x150/88339081_249787672709156_3193755987963955310_n.jpg?_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bCb-WgKQMXAAX99MszN&oh=c6e1e5917eb935cdc4e4d54d06f67cc0&oe=5F2A9B84"
          />
          <Story
            judul="Kelas Online"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.483.1242.1242a/s150x150/61217999_609991096171016_2310622403309000683_n.jpg?_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=O09rJ4Kk0_8AX-5sa_f&oh=56e12fb4ce28f87f7a7e74d05df2d5d8&oe=5F2AAB2C"
          />
          <Story
            judul="Kabayan Coding"
            gambar="https://instagram.fsoc1-2.fna.fbcdn.net/v/t51.12442-15/e15/c40.455.1001.1001a/s150x150/54513385_605346626557949_8055738261444224938_n.jpg?_nc_ht=instagram.fsoc1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SBi8A2Nzc4sAX9RG6gL&oh=6d18d40de3d1986734a8ea8050b1242c&oe=5F2A647A"
          />
          <Story
            judul="Shoot"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.12442-15/e15/c0.280.720.720a/s150x150/52533067_107802193573394_3567253895062241_n.jpg?_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sWWgbLhTl3AAX8p5I3x&oh=db0aa570f8fd8b132c5d84efde8508f1&oe=5F2A8A5F"
          />
          <Story
            judul="Street"
            gambar="https://instagram.fsoc1-2.fna.fbcdn.net/v/t51.12442-15/e15/c0.280.720.720a/s150x150/51719610_624022341391273_8926796135201026731_n.jpg?_nc_ht=instagram.fsoc1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=t_4GqgisNjUAX8UgU_Q&oh=0bc75b924fac75be157accf90d00b319&oe=5F2A7FAC"
          />
          <Story
            judul="Romantics"
            gambar="https://instagram.fsoc1-1.fna.fbcdn.net/v/t51.12442-15/e35/c30.452.812.812a/s150x150/51960985_1171245389666664_6872211617598015269_n.jpg?_nc_ht=instagram.fsoc1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=oXH9Whz3SfAAX_XADcZ&oh=1b16913f18e3d1e7c211c1734a20136e&oe=5F2AB2F5"
          />
          <Story
            judul="Schedule"
            gambar="https://instagram.fsoc1-2.fna.fbcdn.net/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/32886389_958217581018386_5939884021692497920_n.jpg?_nc_ht=instagram.fsoc1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=xdmWDgcWqBwAX8KDqMJ&oh=02acabd886974b495d3bec121259df0b&oe=5F2A5EB5"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  text: {fontFamily: 'Rubik-Medium', fontSize: 20},
});
