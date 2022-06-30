


```tsx
<Tab.Navigator


                    initialRouteName={initialRouteName2}
                    detachInactiveScreens={true}

                    screenOptions={{

                        tabBarActiveTintColor: active_Color_Icon,
                        tabBarInactiveTintColor: inActive_Color_Icon,


                        tabBarAllowFontScaling: true,

                        lazy:true,

                        tabBarStyle: {
                            position: "relative",
                            height: bottomTabsHeight,

                            backgroundColor: commonBackgroundColor,
                            borderBottomColor: '#8E8E93',
                            borderTopColor: '#8E8E93',

                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            minHeight:60,



                        },

                        tabBarShowLabel: true,
                        // tabBarShowLabel: false,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: 'bold',
                            flexDirection: "column-reverse",
                            justifyContent: 'space-between',

                            paddingBottom: 4,
                        },
                        tabBarLabelPosition: "below-icon",



                    }}





                    // tabBar={props => <MyTabBar {...props} />}





                >










                </Tab.Navigator>
```


```tsx
export declare type BottomTabBarProps = {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    insets: EdgeInsets;
};
```


## 09:30 pm:

```java
 initialRouteName={initialRouteName2}
detachInactiveScreens={true}

screenOptions={{

    tabBarActiveTintColor: active_Color_Icon,
        tabBarInactiveTintColor: inActive_Color_Icon,


        tabBarAllowFontScaling: true,

        lazy:true,

        tabBarStyle: {
        position: "relative",
            // height: bottomTabsHeight,

            backgroundColor: commonBackgroundColor,
            borderBottomColor: '#8E8E93',
            borderTopColor: '#8E8E93',

            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            // minHeight:60,
            maxHeight: 30,



    },

    tabBarShowLabel: true,
        // tabBarShowLabel: false,
        tabBarLabelStyle: {
        fontSize: 12,
            fontWeight: 'bold',
            flexDirection: "column-reverse",
            justifyContent: 'space-between',

            paddingBottom: 4,
    },
    tabBarLabelPosition: "below-icon",



}}

```


## label portion:

```java
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
```

## label follower:

```java
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
```

## label: other:

```java
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
```
