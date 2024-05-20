import { styles } from '../src/styles';
import { auth } from '../src/firebase.config';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Text, Image, StatusBar, View, TouchableOpacity, FlatList, Pressable, ScrollView} from "react-native";
import MovieTheWhell from "../src/img/movies/the_wheel_of_time.png"; 
import { MOVIESWATCHING } from "../src/utils/moviesWatching";
import { MOVIESCRIME } from "../src/utils/moviesCrimes";
import { MOVIESWATCH } from "../src/utils/moviesWatch";
import { MoviesCard } from "../src/components/index";



export default function Home() {

    const currentUser = auth.currentUser;
    const router = useRouter();

    if(currentUser != null) {
        // Usuário logado
    } else {
        alert('É necessário estar logado para utilizar este recurso!');
        router.replace('/');
    }

    function profile() {
        router.replace('/profile');
    }

    function evaChat() {
        router.replace('/eva');
    }

    function logOut() {
        signOut(auth)
        .then(() => {
            alert('Você desconectou-se do sistema!');
            router.replace('/')
        })
        .catch((error) => {
            const errorMessage = error.errorMessage;
            alert(errorMessage);
        })
    }

    return (
       
        <View style={styles.internalContainer}>
            <StatusBar hidden/>
             <ScrollView contentContainerStyle={styles.scrollViewCatalog}>
            <View style={styles.topBar}>
                <Pressable onPress={logOut}>
                    <Ionicons name='log-out-outline' size={32} color={'white'} />
                </Pressable>
                <Pressable onPress={evaChat}>
                    <Image source={require('../src/img/eva.png')} style={styles.evaImage}/>
                </Pressable>
                <Pressable onPress={profile}>
                    <Ionicons name='person' size={32} color={'white'}/>
                </Pressable>
            </View>
            <View style={styles.containerCatalog}>
            <View style={styles.categoryCatalog}>
                <TouchableOpacity>
                    <Text style={styles.categoryTextCatalog}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTextCatalog}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTextCatalog}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTextCatalog}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMoviesCatalog}>
            <TouchableOpacity style={styles.movieImageThumbnailCatalog}>
                <Image source={MovieTheWhell} style={styles.movieImageCatalog}/>
            </TouchableOpacity>

            <Text style={styles.movieTextCatalog}>Continue Watching</Text>
            <FlatList
                //Pegar o arquivo importado com imagens
                data={MOVIESWATCHING}
                //Pegar a listagem dos itens, pegar um componente único na listagem 
                keyExtractor={(item) => item.id}
                //Renderizar cada card
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentListCatalog}
                //Para não criar um scroll
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieTextCatalog}>Crime Movies</Text>
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentListCatalog}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieTextCatalog}>Watch in your language</Text>
            <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentListCatalog}
                showsHorizontalScrollIndicator={false}
            />
            </ScrollView>
            
        </View>
        </ScrollView>
        </View>
        
    )
}