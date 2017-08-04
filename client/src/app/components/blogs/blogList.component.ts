import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../services/dataService.service';
import { Blog } from '../../services/blog.model';
import { Blogs, allBlogs } from './mock/blogs.mock';
import * as moment from 'moment';
import 'moment/locale/nl';

@Component({
    selector: 'app-blog-list',
    templateUrl: 'blogList.component.html',
    styleUrls: ['blogList.component.css']
})

export class BlogListComponent implements OnInit{
    title: string;
    blogs: any[];

    constructor(private dataService: DataService, private http: Http){

    }

    private formatDate(dateObj){
        const date = new Date(dateObj['lastModified'])
        dateObj['day'] = date.getDay();
        dateObj['month'] = date.getMonth();
        dateObj['year'] = date.getFullYear();
        return dateObj;
    }

    ngOnInit(): void {
        this.title = 'Laatst gepubliceerde Blogs'
        this.dataService.getBlogs()
            .subscribe(blogs => {
                for (let i = 0;i < blogs.length;i++){
                    blogs[i].lastModified = moment(blogs[i]['lastModified']).format('D MMMM YYYY');
                }
                this.blogs = blogs;
            });
    };

    showAllBlogs(){
        this.title = "Alle Blogs";
    }

    
}