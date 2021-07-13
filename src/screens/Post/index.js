import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from 'react-native';

class Post extends React.Component {   
    constructor(props: {}){
        super(props);
        this.state = {
            loading: false,
            error: null,
            data: [
            ]
        }    
    }

    componentDidMount(){
        const { data } = this.state;
        this.getImagesFromApi();
    }

    getImagesFromApi(){
        const { data } = this.state;
        const url = "https://loremflickr.com/json/g/320/240/all";
        let id;
        this.setState({ loading : true});
        for(id=0;id<3;id++){
            fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: [...this.state.data, {id: id.toString(), file: res.file}],
                    loading: false
                });  
            }).catch(error => {
                this.setState({ error, loading: false})
            });
        }

    }


    renderItem = ({ item }) => {
        return (
            <View style={styles.itens}>
                <Text>{item.file}</Text>
            </View>
        )
    }

    render(){
        const { data } = this.state;
        return (
            <SafeAreaView>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itens}>
                                <Image
                                    style={{
                                        width: 140,
                                        height: 120,
                                        resizeMode: 'contain'
                                    }}
                                    source={{uri: item.file}}
                                >

                                </Image>
                            </View>
                        )
                    }}

                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    itens: {

    },
    text: {
      color: "#333333"
    }
  });

export default Post;