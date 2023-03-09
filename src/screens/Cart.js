
import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItemFromCart } from '../redux/actions/Actions'

function Cart({ navigation }) {

    // let val=[]
    // let x=Boolean(val.length)
    // let y=Boolean(val)
    // console.log(x);
    // console.log(y);

    const dispatch = useDispatch();
    const d = useSelector(state => state)
    const [myProducts, setMyProducts] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [boolean, setBoleean] = useState(false)


    useEffect(() => {

        if (d) {
            setBoleean(Boolean(d.length))
        }

        setMyProducts(d)

        let cost = Number(0)
        if (d) {
            for (const i in d) {
                cost += Number(d[i].price);

            }
            setTotalCost(Math.floor(cost))


        }
    }, [d])
    let handleMyBooking = () => {
       alert(`your items are booked today ${new Date().toLocaleDateString()}.will be delevered within 3 working days`)
    }



    return (<>


        <View style={{ flex: 1, backgroundColor: '#e4e7ed' }}>
            {
                !boolean && (
                    <View style={{ flex: 1, backgroundColor: '#e4e7ed', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: "black", fontSize: 20 }}>
                            Your Cart is Empty
                        </Text>
                    </View>

                )
            }

            {
                boolean && (
                    <FlatList
                        data={myProducts}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    padding: 10,
                                    backgroundColor: "#fff",
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


                                    <Button color={'crimson'}
                                        onPress={() => (dispatch(RemoveItemFromCart(index)))}
                                        title='remove'
                                    />
                                </View>
                            )
                        }}

                        keyExtractor={(item, i) => i}
                    />
                )
            }

            {boolean && <View style={{  backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginBottom: 5, paddingBottom:3,}} >

                <Text style={{ color: "black", fontSize: 20, margin:5,  }}>
                    Total Cost: ${Math.floor(totalCost)}
                </Text>
                <Button
                    onPress={handleMyBooking}
                    title='                                            Order                                              '
                />

            </View>}
        </View>
    </>

    )
}

export default Cart





















