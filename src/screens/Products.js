import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, FlatList, Image, SafeAreaView, StyleSheet, StatusBar, Platform, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemToCart } from '../redux/actions/Actions'

function Products({ navigation }) {

    let [myProducts, setMyProducts] = useState(null)
    let [count, setCount] = useState(0)


    const dispatch = useDispatch()

    const d = useSelector(state => state)
    useEffect(() => {
        if (d) {
            setCount(d.length)
        }
    }, [d])


    useEffect(() => {

        async function fetchProduct() {

            try {
                let { data } = await axios.get('https://fakestoreapi.com/products')
                setMyProducts(data)
                // console.log('====================================');
                // console.log(data);
                // console.log('====================================');

            }
            catch (e) {
                console.log(r);
            }

        }
        fetchProduct()


    }, [])


    return (
        <SafeAreaView style={styles.safeArea} >

            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#e4e7ed", }} >
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: "#fff", width: 409, paddingHorizontal:1,marginBottom:10}} >
                   
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: "#fff",width: 150,}}>
                        <TouchableOpacity onPress={() => (navigation.navigate('Cart'))} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff", height: 50, width: 50, borderRadius: 50, }} >
                            <Text style={{ color: "black", fontSize: 23 }}>☰</Text>
                        </TouchableOpacity>
                        <Text style={{ color: "black", fontSize: 23 }}>Products</Text>
                    </View>

                    <TouchableOpacity onPress={() => (navigation.navigate('Cart'))} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "yellow", height: 50, width: 50, borderRadius: 50, margin:10}} >
                        <Text style={{ color: "black", fontSize: 23 }}>{count}</Text>
                    </TouchableOpacity>

                </View>




                {
                    myProducts && (
                        <FlatList
                            data={myProducts}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        backgroundColor: "#fff",
                                        padding: 10,
                                        width: 390,
                                        margin: 10,
                                        borderRadius: 10,
                                    }} >

                                        <View style={{
                                            display: "flex",
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',

                                        }}>


                                            <Image
                                                source={{ uri: `${item.image}` }}
                                                style={{ maxWidth: 250, maxHeight: 250, height: 90, width: 70 }}
                                            />

                                            <Text style={{ color: "black", fontSize: 23 }}>
                                                Price: ${Math.floor(item.price)}
                                            </Text>



                                        </View >
                                        <Text style={{ color: "black", fontSize: 20, marginBottom: 20 }}>
                                            {item.title}
                                        </Text>
                                        <Button 
                                            onPress={() => (dispatch(AddItemToCart(item)))}
                                            title='add to cart'
                                        />
                                        {/* <TouchableOpacity onPress={() => (dispatch(AddItemToCart(item)))}
                                        style={{
                                            backgroundColor: "green",
                                            height: 50,
                                            width: 100,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 10,
                                            margin: 10,
                                            marginLeft: 0
                                        }} >
                                        <Text style={{ color: "white", fontSize: 15 }}>Add to cart</Text>
                                    </TouchableOpacity>
 */}

                                    </View>
                                )
                            }}

                            keyExtractor={(item, index) => index}

                        />
                    )
                }
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    safeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1, alignItems: 'center', backgroundColor: "aliceblue",
    }
})

export default Products