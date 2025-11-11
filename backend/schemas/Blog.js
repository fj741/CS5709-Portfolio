import mongoose from "mongoose"

const blogSchema ={
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: {type: Date, default: Date.now}
 
}

const Blog = mongoose.model("Blog", blogSchema);