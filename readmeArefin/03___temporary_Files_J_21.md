

```tsx
<Image
                    source={splashImage}
                    style={{
                        height: '100%',
                        width: '100%',

                    }}
                    resizeMode={'contain'}
                    // resizeMethod={'contain'}
                />
```
icons:

1. notification
2. direction
3. plus
4. user
5. menu || burger
6. control || settings
7. direction
8. search
9. compass



## more:

icecream
berger
tea
bags
market
books


tabBarIconStyle
tabBarActiveBackgroundColor
tabBarInactiveBackgroundColor

## stripped code: 09:01:

```tsx
  <Tab.Screen
                        name="Others"
                        component={Ixprez}
                        options={{
                            tabBarLabel: 'Others',
                            // tabBarShowLabel: false,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />

                                /*  <Image
                                      style={{
                                          height: iconSize,
                                          width: iconSize,

                                          //backgroundColor: "#f2f2f2"
                                      }}
                                      source={Others_Image}
                                  />*/



                            ),


                        }}
                    />
```
```tsx

   <Tab.Screen
                        name="Ixprez"
                        component={Ixprez}


                        options={{
                            // tabBarLabel: 'Ixprez',
                            // tabBarShowLabel: true,
                            // tabBarShowLabel: false,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: (
                                {
                                    focused,
                                    color,
                                    size,
                                }) => (
                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />
                               /* <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Ixprez_Image}
                                />*/



                            ),

                            tabBarActiveBackgroundColor: 'red',
                        }}
                    />

                    <Tab.Screen
                        name="Wexprez"
                        component={Ixprez}
                        options={{
                            tabBarLabel: 'Wexprez',
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />

                                /*<Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Wexprez_Image}
                                />*/

                            ),

                        }}
                    />

                    <Tab.Screen
                        name="Following"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Following',
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (


                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />

                           /*     <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,

                                        //backgroundColor: "#f2f2f2"
                                    }}
                                    source={Following_Image}
                                />*/
                            ),


                        }}
                    />




                    <Tab.Screen
                        name="Follower"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Follower',
                            // tabBarShowLabel: true,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />
                             /*   <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Follower_Image}
                                />*/

                            ),


                        }}
                    />




                    {/*<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />*/}





                    {/*Other Users Posts begins here*/}
                    <Tab.Screen
                        name="Others"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Others',
                          // tabBarShowLabel: false,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                  <Ionicons
                                       style={[{color: active_Color_Icon}]}
                                       size={focused?iconSize*2:iconSize}
                                       name={'ios-notifications-outline'}
                                   />

                              /*  <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,

                                        //backgroundColor: "#f2f2f2"
                                    }}
                                    source={Others_Image}
                                />*/



                            ),


                        }}
                    />

                    {/*Other Users Posts begins here*/}




```


## stripped code:

```tsx
 {/*IMP june -1st 2022*/}

                    {/*  <Tab.Screen
                        name="xPrez"
                        component={Home_Primary}
                        options={{

                            tabBarLabel: 'xPrez',
                            tabBarShowLabel: true,
                            headerShown: false,

                            // tabBarVisible: true,

                            tabBarIcon: ({
                                             // focused,
                                             color,
                                             size }) => (

                                <FontAwesome style={
                                    [
                                        {
                                            color: active_Color_Icon,
                                            // backgroundColor: 'gold',

                                        },
                                    ]}
                                             size={iconSize}
                                             name={'superpowers'}

                                />
                            ),
                        }}

                    />*/}

                    {/*IMP june -1st 2022*/}
```



## some error/ warning:

```java
TS2786: 'Tab.Navigator' cannot be used as a JSX component.   Its element type 'ReactElement<any, any> |
 Component<Omit<DefaultRouterOptions<string> & { id?: string | undefined; children: ReactNode; 
 screenListeners?: Partial<...> | ... 1 more ... | undefined; screenOptions?: BottomTabNavigationOptions
  | ... 1 more ... | undefined; defaultScreenOptions?: BottomTabNavigationOptions | ... 1 more ....' is not a
   valid JSX element.     Type 'Component<Omit<DefaultRouterOptions<string> & { id?: string | undefined; 
   children: ReactNode; screenListeners?: Partial<{ tabPress: EventListenerCallback<BottomTabNavigationEventMap, "tabPress">; ... 
   4 more ...; beforeRemove: EventListenerCallback<...>; }> | ((props: { ...; }) => Partial<...>) | undefined; screenOpt...' is not
    assignable to type 'Element | ElementClass | null'.       Type 'Component<Omit<DefaultRouterOptions<string> & 
    { id?: string | undefined; children: ReactNode; screenListeners?: Partial<{ tabPress: EventListenerCallback<BottomTabNavigationEventMap, 
    "tabPress">; ... 4 more ...; beforeRemove: EventListenerCallback<...>; }> | ((props: { ...; }) => Partial<...>) | undefined; screenOpt...'
     is not assignable to type 'ElementClass'.         The types returned by 'render()' are incompatible between these
      types.           Type 'React.ReactNode' is not assignable 
      to type 'import("/home/arefin/Programs/eazm__/RN_68_Vocally/node_modules/@types/react-native/node_modules/@types/react/index").ReactNode'. 
                  Type '{}' is not assignable to type 'ReactNode'.
```
