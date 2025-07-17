import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Video model schema definition
// This schema defines the structure of video documents in the MongoDB database
const videoSchema=new Schema(
    {
        videoFile: {
            type: String, // cloudinary video url
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            index: true // Index for faster lookups and searches optimization
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number,
            required: true,
        },
        thumbnailUrl: { // cloudinary image url
            type: String,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        // likes: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "User"
        //     }
        // ],
        // comments: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: "Comment"
        //     }
        // ]
    },
    {
        timestamps: true
    }
)
videoSchema.plugin(mongooseAggregatePaginate); // Plugin for pagination support

export const Video=mongoose.model("Video",videoSchema);