//https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
export default {

  methods: {
    /*increment() {
    this.count++;
  }*/
},
computed: {
  /*  double () {
  return this.count * 2;
}*/
},
render() {
  //https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object
  return this.$scopedSlots.default({
    uri: this.uri,
    disjointWith: this.disjointWith,
    attachment: this.attachement,
    attributedTo: this.attributedTo,
    audience: this.audience,
    content: this.content,
    context: this.context,
    name: this.name,
    endTime: this.endTime,
    generator: this.generator,
    icon: this.icon,
    image: this.image,
    inReplyTo: this.inReplyTo,
    location: this.location,
    preview: this.preview,
    published: this.published,
    replies: this.replies,
    startTime: this.startTime,
    summary: this.summary,
    tag: this.tag,
    updated: this.updated,
    url: this.url,
    to: this.to,
    bto: this.bto,
    cc: this.cc,
    bcc: this.bcc,
    mediaType: this.mediaType,
    duration: this.duration
  })
}
}
