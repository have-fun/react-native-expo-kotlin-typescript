class Planet(val name: String) {
    @JsName("receiveHello")
    fun receiveHello(fromName: String): String {

        // A workaround for setting a breakpoint in Kotlin code
        js("debugger")

        return "Hi $fromName. I'm $name. Please save me."
    }
}
