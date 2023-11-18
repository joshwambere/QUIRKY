import Image from 'next/image'
import { Inter } from 'next/font/google'
import {SideMenu} from "@/components/menus/SideMenu";
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })


interface LocationData {
    country: string;
}

export default function Home() {
    const [country, setCountry] = useState<string | null>(null);

    useEffect(() => {
        // Function to get user's IP address
        const getUserIP = async () => {
            try {
                // Check if the application is running on localhost
                if (window.location.hostname === 'localhost') {
                    setCountry('RW'); // Apply RW theme for localhost
                    return;
                }

                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                const userIP = data.ip;
                console.log('userIP', userIP);

                // Function to get location based on IP
                const getLocation = async (ip: string) => {
                    try {
                        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
                        const locationData: LocationData = await locationResponse.json();
                        setCountry(locationData.country);
                        console.log('locationData', locationData);
                    } catch (error) {
                        console.error('Error fetching location:', error);
                    }
                };

                getLocation(userIP);
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
        };

        getUserIP();
    }, []);

    // Apply theme based on country
    const getThemeClass = () => {
        if (typeof window !== "undefined") {
            if (country === 'RW' || window.location.hostname === 'localhost') {
                return 'sweden-theme';
            } else {
                return 'sweden-theme';
            }
        }
        return 'rwanda-theme';
    };

  return (
    <main
      className={`flex min-h-screen flex-col justify-between w-screen items-start foreground`}
    >
        <div  className={`flex min-h-screen flex-col justify-between w-screen items-start ${getThemeClass()}`} ></div>
      <SideMenu />
    </main>
  )
}
