import VideoPlayer from "../components/VideoPlayer"
import Emoji from "../components/Emoji"
import { EmojiProvider } from "../context/EmojiContext"

export default function Homepage() {
    return (
        <div className="Homepage">
            <h1>Home</h1>
            <EmojiProvider>
                <Emoji />
            </EmojiProvider>
            <hr />
            <VideoPlayer />
        </div>
    )
}

