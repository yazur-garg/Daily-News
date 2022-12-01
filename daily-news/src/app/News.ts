/*export class News{
    source: {
        id: any;
        name: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;    
    urlToImage: string;
    publishedAt: string;
    content: string;
}*/

export class News{
    section: string;
    subsection: string;
    title: string;
    abstract: string;
    url: string;
    uri: string;
    byline: string;
    item_type: string;
    updated_date: string;
    created_date: string;
    published_date: string;
    material_type_facet: string;
    kicker: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    multimedia: {   
        url: string;
        format: string;
        height: number;
        width: number;
        type: string;
        subtype: string;
        caption: string;
        copyright: string;
    }[];
    short_url: string;
}