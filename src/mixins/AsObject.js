export default {
  data: () => ({
    uri: "https://www.w3.org/ns/activitystreams#Object",
    disjointWith : "https://www.w3.org/ns/activitystreams#Link",
    attachement: "",
    attributedTo: "",
    audience: "BJNJ",
    content: "",
    context: "",
    name: "",
    endTime: "",
    generator: "",
    icon: "",
    image: "",
    inReplyTo: "",
    location: "",
    preview: "",
    published: "",
    replies: "",
    startTime: "",
    summary: "",
    tag: "",
    updated: "",
    url: "",
    to: "",
    bto: "",
    cc: "",
    bcc: "",
    mediaType: "",
    duration: "",
    count: 2
  }),
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    double () {
      return this.count * 2;
    }
  }
}
// define a mixin object
/*
export const AsObject = {
data: function () {
return {
uri: "https://www.w3.org/ns/activitystreams#Object",
disjointWith : "https://www.w3.org/ns/activitystreams#Link",
attachement: "",
attributedTo: "",
audience: "BJNJ",
content: "",
context: "",
name: "",
endTime: "",
generator: "",
icon: "",
image: "",
inReplyTo: "",
location: "",
preview: "",
published: "",
replies: "",
startTime: "",
summary: "",
tag: "",
updated: "",
url: "",
to: "",
bto: "",
cc: "",
bcc: "",
mediaType: "",
duration: ""}
},

created: function () {
this.hello()
},
methods: {
hello: function () {
console.log('hello from mixin!')
}
}
}
*/
