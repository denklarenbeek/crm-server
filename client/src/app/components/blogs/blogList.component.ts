import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService.service';
import { Blog } from '../../services/blog.model';
import {Blogs, allBlogs} from './mock/blogs.mock';

@Component({
    selector: 'app-blog-list',
    templateUrl: 'blogList.component.html',
    styleUrls: ['blogList.component.css']
})

export class BlogListComponent implements OnInit{
    title: string;
    blogs = Blogs.posts
    constructor(private dataService: DataService){

    }
    ngOnInit(){
        this.title = 'Laatst gepubliceerde Blogs'
    };

    showAllBlogs(){
        this.title = "Alle Blogs";
        this.blogs = allBlogs.posts;
    }

    
}