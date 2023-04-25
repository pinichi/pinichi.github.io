<script setup lang="ts">
const router = useRouter();
watchEffect(() => {
  router.replace({ path: "/404" });
});
</script>
