import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, date, readTime }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-border bg-gradient-to-br from-card to-card/50 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <CardTitle className="text-xl group-hover:text-accent transition-colors">{title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-accent font-medium group-hover:underline">Read more →</span>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
