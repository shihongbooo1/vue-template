export default {
  data () {
    return {
      one: '111'
    }
  },
  methods: {
    text () {
      console.log(this.$data)
    }
  },
  mounted () {
    console.log(11111)
  }
}
